const app = angular.module("myApp",[])

function parent($scope){
    $scope.textParent ="Đây là nội dung cha"

}
function child($scope,$rootScope){
    $scope.textChild = "Đây là nội dung con"
    $rootScope.textGlobal ="Biến toàn cục nhưng được khai báo trong con";
}   

function myFunction($scope){
    $scope.data ={
        name: "chinhpd5",
        gender: false,
        mark: 4,
        khoa: "UDPM",
        hobbies: ["đá bóng","nhảy dây","đá cầu"]
    }
    $scope.productList=[
        {
            id: 1,
            name: "Product 1",
            price: 1000,
	        isSale:true,
            image: "https://cdn.dummyjson.com/product-images/2/1.jpg",
            description: "Mô tả sản phẩm 1"
        },
        {
            id: 2,
            name: "Product 2",
            price: 2000,
            isSale:false,
            image: "https://cdn.dummyjson.com/product-images/2/2.jpg",
            description: "Mô tả sản phẩm 2"
        },
        {
            id: 3,
            name: "Product 3",
            price: 3000,
	        isSale:true,
            image: "https://cdn.dummyjson.com/product-images/3/1.jpg",
            description: "Mô tả sản phẩm 3"
        },
        {
            id: 4,
            name: "Product 4",
            price: 4000,
 	        isSale:false,
            image: "https://cdn.dummyjson.com/product-images/6/4.jpg",
            description: "Mô tả sản phẩm 4"
        },
        {
            id: 5,
            name: "Product 5",
            price: 5000,
	        isSale:true,
            image: "https://cdn.dummyjson.com/product-images/5/1.jpg",
            description: "Mô tả sản phẩm 5"
        },
        {
            id: 6,
            name: "Product 6",
            price: 6000,
 	        isSale:false,
            image: "https://cdn.dummyjson.com/product-images/5/2.jpg",
            description: "Mô tả sản phẩm 6"
        },
        {
            id: 7,
            name: "Product 7",
            price: 7000,
 	        isSale:true,
            image: "https://cdn.dummyjson.com/product-images/5/3.jpg",
            description: "Mô tả sản phẩm 7"
        },
        {
            id: 8,
            name: "Product 8",
            price: 8000,
 	        isSale:false,
            image: "https://cdn.dummyjson.com/product-images/6/1.png",
            description: "Mô tả sản phẩm 8"
        }
    ]

}


app.controller("myControler",myFunction);
app.controller("parent",parent);
app.controller("child",child)