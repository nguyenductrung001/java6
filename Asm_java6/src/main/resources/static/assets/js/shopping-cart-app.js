const app = angular.module("shopping-cart-app",[]);
app.controller("shopping-cart-ctrl",function($scope,$http){
    $scope.cart={
        //luu vao mang
        items:[],
        // them sp vao gio hang
        add(id){
            // tim xem co mat hang naof co id nhu v khong
            var item = this.items.find(item => item.id==id);
            if(item){// neu co thi se tang so luong len
                item.qty++;
                this.saveToLoCalStorage();
            }else{ // neu khong co thi ta sex tai 1 sp tren ipa ve va luu vao gio hang
                $http.get(`/rest/products/${id}`).then(resp => {
                    resp.data.qty =1;
                    this.items.push(resp.data);
                    this.saveToLoCalStorage();
                })
            }
        },
        //xoa sp khoi gio hang
        remove(id){
            // tim vi tri cua sp trong gio hang thong qua id
            var index = this.items.findIndex(item => item.id == id);
            // khi co dc vi tri thi dung splice der xoa
            this.items.splice(index,1);
            this.saveToLoCalStorage();
        },
        // xoa sach
        clear(id){
            this.items = [];
            this.saveToLoCalStorage();
        },
        //Tinh thanh tien cua 1 sp
        amt_of(item){},
        // tinhs tong so mat hang xo trong gio
        get count(){// qty = quantity
            return this.items
            .map(item => item.qty)
            .reduce((total,qty) => total+= qty,0)
        },
        // tong tien cac mat hang co trong gio
        get amount(){
            return this.items
            .map(item => item.qty * item.price)
            .reduce((total,qty) => total+= qty,0)
        },
        // luu gio hang vao local storage
        saveToLoCalStorage(){//this.items doi cac mat hang tu mang thanh json
            var json = JSON.stringify(angular.copy(this.items));
            // dung chuoi json đó lưu vào local bằng tên cart
            localStorage.setItem("cart",json);
        },
        // doc gio hang tu local storage
        loadFormLocalStorage(){
            // doc lai cart trong local 
            var json = localStorage.getItem("cart");
            // neu co thi chuyen sang json  va gan vo items neu khong thi gan vao mang
            this.items = json ? JSON.parse(json) : [];
        }
        }
        $scope.cart.loadFormLocalStorage();
})