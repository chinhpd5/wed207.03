const app = angular.module("myApp",[])

function parent($scope){
    $scope.textParent ="Đây là nội dung cha"

}
function child($scope,$rootScope){
    $scope.textChild = "Đây là nội dung con"
    $rootScope.textGlobal ="Biến toàn cục nhưng được khai báo trong con";
}   

app.controller("parent",parent);
app.controller("child",child)