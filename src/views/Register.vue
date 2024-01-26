<template>
    <div class="form-wrap">
        <form class="Register">
            <p class="login-register">
                Already have an account?
                <router-link class="router-link" :to="{name: 'Login' }">Login</router-link>
            </p>
            <h2>SignUp to Our Blog</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text"  v-model="firstName" placeholder="First Name">
                    <user class="icon"/>
                </div>
                <div class="input">
                    <input type="text"  v-model="lastName" placeholder="Last Name">
                    <user class="icon"/>
                </div>
                <div class="input">
                    <input type="text"  v-model="userName" placeholder="User Name">
                    <user class="icon"/>
                </div>
                <div class="input">
                    <input type="text"  v-model="email" placeholder="Email">
                    <email class="icon"/>
                </div>
                <div class="input">
                    <input type="password" name="Password" v-model="password" placeholder="Password">
                    <password class="icon"/>
                </div>
                <div v-show="error" class="error">{{ this.errorMsg }}</div>
            </div>
            <router-link class="forgot-password" :to="{name : 'ForgotPassword'}">
                forgot your password? 
            </router-link>
            <button @click.prevent="register" class="router-button">Sign in</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>

    </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import user from "../assets/Icons/user-alt-light.svg";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
export default {
  name: "Register",
  components: {
    email,
    password,
    user,
  },
    data(){
        return{
            firstName: null,
            lastName: null,
            userName: null,
            email: null,
            password: null,
            error: null, 
            errorMsg: "",
        };
    },
    methods: {
        async register(){
            if(
                this.email !== "" &&
                this.password !== "" &&
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.username !== ""
            ){
                this.error = false;
                this.errorMsg = "";
                const firebaseAuth = await firebase.auth();
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                const result = await createUser;
                const dataBase = db.collection("users").doc(result.user.uid);
                await dataBase.set({
                    firstName : this.firstName,
                    lastName : this.lastName,
                    userName : this.userName,
                    email : this.email,
                });
                this.router.push({name: 'Home'})
                return;
            }
            this.error = true;
            this.errorMsg = "Please Fill Out all the Data ";
            return;
        }
    },
};

</script>

<style lang="scss" scoped>
.register{
    h2{
        max-width: 350px;
    }
}

</style>