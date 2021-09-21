<template>
<div class="page contact">
    <div class="container">
      
        <form ref="form" @submit.prevent="sendEmail" v-if="!sentSuccessful">
            <label>Name (required)</label>
            <input type="text" name="user_name" required>
            <label>Email (required)</label>
            <input type="email" name="user_email" required>
            <label>Message</label>
            <textarea name="message"></textarea>
            <input class="btn" type="submit" value="Send">
        </form>
        <div class="success" v-if="sentSuccessful">
          <p>Message sent!</p> 
        </div>
    </div>
</div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data: function(){
    return{
       sentSuccessful : false
    }
      
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_2qykycd', 'template_aafqxh9', this.$refs.form, 'user_Cup95TKzOFXAnAfULwTOy')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.sentSuccessful = true
        }, (error) => {
            console.log('FAILED...', error.text);
        });
        this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
  .contact{
    /* min-height: 100vh; */
    width: 100%;
    display: grid;
    place-items: center;
  }

  .container{
    /* border: 1px solid red; */
    width: 40%;
    margin-top: 200px;
    padding: 20px;
  }

  form{
      display: flex;
      flex-direction: column;
  }

  label{
    font-family: 'Fredericka the Great', cursive;
    padding: 30px 0 10px 0;
  }

  input{
      padding: 12px;
      font-size: 1rem;
  }

  input:focus{
    outline: 4px solid #e9c213;
  }

  input[type="text"],
       [type="email"]{
    border: 1px solid rgba(128, 128, 128, 0.514);
  }

  textarea{
    min-height: 9rem;
    max-width: 100%;
    max-height: 15rem;
  }

  textarea:focus{
    outline: 4px solid #e9c213;
    border: none;
  }

  .btn{
      margin-top: 50px;
      display: block;
      width: 120px;
      background-color: transparent;
      background-color: #e9c213;
      font-family: 'Oleo Script Swash Caps', cursive;
      font-size: 2rem;
      padding: 2px;
      border: none;
      border-radius: 6px;
      transition: all .1s ease-in-out;
      box-shadow: 2px 2px 5px rgba(39, 33, 33, 0.596);
  }

  .btn:hover{
      cursor: pointer;
      box-shadow: none;
      transform: scale(.99);
  }

  .btn:focus{
    outline: 4px solid #18150b6c;
  }

  .success{
    margin: 0 auto;
    text-align: center;

  }

  .success p{
    font-size: 2rem;
    font-family: 'Fredericka the Great', cursive;
    
  }

  @media (max-width: 850px) {
      .container{
        width: 90%;
      }
  }

  @media(max-width: 500px){
      .container{
        padding-bottom: 50px;
      }
  }

</style>
