app.controller("product-ctrl", function($scope, $http) {
	// hiện items lên table
	$scope.items = [];

	/*$scope.categories = [];*/

	$scope.form = {
		createDate: new Date(),
		image: 'cloud-upload.jpg',
		available: true
	};
// tải taonf bộ thông tin sp từ db lên
	$scope.initialize = function() {
		//get list product
		$http.get("/rest/products").then(res => {
			$scope.items = res.data;
			$scope.items.foreach(item => {
			// chuyển đổi từ chuỗi qua javascript
				item.createDate = new Date(item.createDate)
			})
		})

		//hiển thị category lên combobox
		$http.get("/rest/category").then(res => {
			$scope.categories = res.data;
		})
	};

	$scope.initialize();

	$scope.reset = function() {
		$scope.form = {
			createDate: new Date(),
			image: 'cloud-upload.jpg',
			available: true
		};
	};
//giao tiếp giữa frorm List và form table
	$scope.edit = function(item) {
		$scope.form = angular.copy(item);
		$(".nav-tabs button:eq(0)").tab("show");
	};

	$scope.create = function() {
		if (confirm("Xác nhận tạo sản phẩm")) {
		//lấy thông tin trên form
			let item = angular.copy($scope.form);
			//post vào địa chỉ rest/products
			$http.post('/rest/products', item).then(res => {
				res.data.createDate = new Date(res.data.createDate);
				$scope.items.push(res.data);
				$scope.reset();
				alert("Thêm thành công!");
			}).catch(err => {
				alert("Lỗi khi thêm sản phẩm!");
				console.log("Error", err);
			})
		}
	};

	$scope.update = function() {
		if (confirm("Xác nhận cập nhật sản phẩm")) {

			let item = angular.copy($scope.form);
			$http.put(`/rest/products/${item.id}`, item).then(res => {
				item = res.data;
				let idx = $scope.items.findIndex(p => p.id == item.id);
				//nếu id trùng với id từ server trả về  thực hiện update 
				$scope.items[$scope.items.findIndex(p => p.id == item.id)] = item;
				console.log(idx);
				alert("Cập nhật thành công!");
			}).catch(err => {
				alert("Lỗi khi cập nhật sản phẩm!");
				console.log("Error", err);
			})
		}
	};

	$scope.delete = function(item) {
		if (confirm("Xác nhận xóa sản phẩm")) {
		let item = angular.copy($scope.form);
		item.available = false 
			$http.put(`/rest/products/${item.id}`, item).then(res => {
				item = res.data;
				let idx = $scope.items.findIndex(p => p.id == item.id);
				$scope.items[$scope.items.findIndex(p => p.id == item.id)] = item;
				$scope.reset();
				alert("Xóa thành công!");
			}).catch(err => {
				alert("Lỗi khi xóa sản phẩm!");
				console.log("Error", err);
			})
		}
	};
//upload hình
	$scope.imageChanged = function(files) {
		let data = new FormData();
		data.append('file', files[0]);
		$http.post('/rest/upload/images', data, {
			transformRequest: angular.identity,
			headers: { 'Content-Type': undefined }
		}).then(res => {
			$scope.form.image = res.data.name;
		}).catch(err => {
			alert("Lỗi up load hình ảnh");
			console.log("Error", err);
		})

	};

// phân trang
	$scope.pagging = {
		page: 0,
		size: 10,
		get items() {
			var start = this.page * this.size;
			return $scope.items.slice(start, start + this.size);
		},
		get count() {
			return Math.ceil(1.0 * $scope.items.length / this.size);
		},
		first() {
			this.page = 0;
		},
		prev() {
			this.page = this.page > 0 ? this.page - 1 : 0;
		},
		next() {
			this.page = this.page < this.count - 1 ? this.page + 1 : this.count - 1;
		},
		last() {
			this.page = this.count - 1;
		}
	}
});