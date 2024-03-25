const app = angular.module("myApp",[])

function myFunction($scope){
    // bài tập:
    /*
        Sử dụng bootstrap
        Tạo Form nhập thông tin: 
            Họ tên, tuổi, quê quán, chuyên ngành, sở thích
        Khi nhấn nút submit: hiển thị thông tin nhập vào
    */
    $scope.sayHello ='';

    $scope.onSubmit = function($event){
        // ngăn chặn hành động load lại tranh
        $event.preventDefault();
        $scope.sayHello ="xin chào "+ $scope.name;
    }
}

app.controller("myController",myFunction)

