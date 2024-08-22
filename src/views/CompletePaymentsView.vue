<script>


</script>


<template>
    <div class="cBody">

        <div class="cContainer">
        <h1> PAYMENTS</h1>
        <P id="pFirst">Enter payment details:</P>

                <div class="cForm">
                <form action="">
                    <div class="field1">
                    <label for="bill" id="bill">Name of the bill:</label>
                    <input type="text" class="inputBill">
                    </div>

                    <div class="field2">                           
                    <label for="pNumber" id="pNumber">Phone number:</label>
                    <input type="number" class="inputNumber">
                    </div>

                    <div class="button1">
                    <button> Okay </button>
                    </div>
                </form>
                </div>    
        </div>


        
    </div>
</template>


<style  scoped>
/* .cBody{
    margin: 100px;
    background-color: #43B02A;
    height: 100vh;
} */

.cContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 200vh; */
  margin-top: 15hv;
  background-color: #43B02A;
}

h1{
margin-top: 15vh;
margin-bottom: 2vh;
font-weight: 500;


}

#pFirst{
font-weight: 500;
}




.cForm{
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin-top: 25px;

  
}



.field1{
 display: flex;
 flex-direction: column;
 width: 300px;


  
}

.field2{
 display: flex;
 flex-direction: column;
 margin-top: 10px;
}


/*  */

.button1{
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin-bottom: 40vh;
 background-color: yellow;
 margin-top: 10px;
 width: 100px;
 margin-left: 100px;
 border-radius: 10px;
  
}

#bill{
    font-weight: 500;
}


#pNumber{
    font-weight: 500;
}


.inputBill{
 border: solid 1px #555555;
 background-color: #43B02A;
}

.inputNumber{
 border: solid 1px #555555;
 background-color: #43B02A;
}


</style>