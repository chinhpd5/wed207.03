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
}


app.controller("myControler",myFunction);
app.controller("parent",parent);
app.controller("child",child)