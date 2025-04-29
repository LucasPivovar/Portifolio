  <template>
    <div class="bolhas">
        <span style="--i:11"></span>
        <span style="--i:12"></span>
        <span style="--i:24"></span>
        <span style="--i:10"></span>
        <span style="--i:14"></span>
        <span style="--i:23"></span>
        <span style="--i:18"></span>
        <span style="--i:16"></span>
        <span style="--i:19"></span>
        <span style="--i:20"></span>
        <span style="--i:22"></span>
        <span style="--i:25"></span>
        <span style="--i:18"></span>
        <span style="--i:21"></span>
        <span style="--i:15"></span>
        <span style="--i:13"></span>
        <span style="--i:24"></span>
        <span style="--i:10"></span>
        <span style="--i:14"></span>
        <span style="--i:23"></span>
        <span style="--i:18"></span>
        <span style="--i:16"></span>
        <span style="--i:19"></span>
        <span style="--i:20"></span>
        <span style="--i:22"></span>
        <span style="--i:25"></span>
        <span style="--i:18"></span>
        <span style="--i:21"></span>
        <span style="--i:15"></span>    
    </div>
</template>

<script>
    export default {
        name: 'TempBubble',
    }
</script>

<style scoped>
    .bolhas{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 1;
        background-color: #0f1520;
        width: 100%;
        min-height: 100vh;
        padding: 0;
        margin: 0;
        font-family: "Inter", sans-serif;    
    }

    .bolhas span{
        position: absolute;
        bottom: -50px;
        background: #fffffff6;
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 10px #e5ff0044,
        0 0 50px #e5ff0050,
        0 0 100px #e5ff0030;
        animation: animar calc(3s + var(--i) * 0.1s) linear infinite;
        transform-origin: center;
    }

    .bolhas span:nth-child(even){
        background: #03a5e6;
        box-shadow: 0 0 10px #2dc3ff44,
        0 0 50px #2dc3ff50,
        0 0 100px #2dc3ff30;
    }

    .bolhas span:nth-child(1){
        width: 30px;
        height: 30px;
        left: 10%;
    }

    .bolhas span:nth-child(2){
        width: 20px;
        height: 20px;
        left: 20%;
    }

    .bolhas span:nth-child(3){
        width: 25px;
        height: 25px;
        left: 30%;
    }

    .bolhas span:nth-child(4){
        width: 50px;
        height: 50px;
        left: 40%;
    }

    .bolhas span:nth-child(5){
        width: 35px;
        height: 35px;
        left: 50%;
    }

    .bolhas span:nth-child(6){
        width: 45px;
        height: 45px;
        left: 60%;
    }

    .bolhas span:nth-child(7){
        width: 25px;
        height: 25px;
        left: 70%;
    }

    .bolhas span:nth-child(8){
        width: 30px;
        height: 30px;
        left: 80%;
    }

    .bolhas span:nth-child(9){
        width: 40px;
        height: 40px;
        left: 90%;
    }

    .bolhas span:nth-child(10){
        width: 35px;
        height: 35px;
        left: 5%;
    }

    .bolhas span:nth-child(11){
        width: 20px;
        height: 20px;
        left: 15%;
    }

    .bolhas span:nth-child(12){
        width: 25px;
        height: 25px;
        left: 25%;
    }

    .bolhas span:nth-child(13){
        width: 30px;
        height: 30px;
        left: 35%;
    }

    .bolhas span:nth-child(14){
        width: 40px;
        height: 40px;
        left: 23%;
    }

    .bolhas span:nth-child(15){
        width: 25px;
        height: 25px;
        left: 70%;
    }

    .bolhas span:nth-child(16){
        width: 35px;
        height: 35px;
        left: 87%;
    }

    .bolhas span:nth-child(17){
        width: 20px;
        height: 20px;
        left: 75%;
    }

    .bolhas span:nth-child(18){
        width: 45px;
        height: 45px;
        left: 85%;
    }

    .bolhas span:nth-child(19){
        width: 30px;
        height: 30px;
        left: 95%;
    }

    .bolhas span:nth-child(20){
        width: 40px;
        height: 40px;
        left: 33%;
    }

    @keyframes animar{
        0%{
            transform: translateY(0) scale(0);
            opacity: 0;
        }
        10%{
            opacity: 1;
        }
        90%{
            opacity: 1;
        }
        100%{
            transform: translateY(-100vh) scale(0.2);
            opacity: 0;
        }
    }

    @media screen and (max-width: 1000px) {
        .bolhas{
            position: absolute;
            width: 100%;
            min-height: 100vh;
            height: 130%;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 1;
            background-color: #0f1520;
            width: 100%;
            padding: 0;
            margin: 0;
            font-family: "Inter", sans-serif;    
            overflow: hidden;
        }
        
    }
</style>