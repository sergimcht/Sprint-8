<template>
    <div class="fake-home">
        <img src="../assets/FakeHome.png" alt="Star Wars Home" class= "fake-home1">
        <img src="../assets/FakeHome2.png" alt="Star Wars Home" class= "fake-home2">
    </div>
    </template>
    
    <script>
    
    </script>
    
    <style>
    .fake-home {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .fake-home2 {
        display: none;
    }

    @media only screen and (max-width: 1300px) {
        .fake-home1{
            display: none;
        }

        .fake-home2{
            display: block;
        }
        }
    </style>