<template>
  <v-layout column justify-center align-center class="main-layout">
    <v-layout class="right-nav">
      <v-card class="login">
        <v-layout class="auth-card" justify-center align-center>
          <h3 class=" black--text font-weight-bold ">
            Login to <a href="/">Procquire</a>
          </h3>
          <v-form v-model="valid">
            <h3 class="text-left">Email</h3>
            <v-text-field
              dense
              v-model="userInfo.email"
              :rules="[emailrules.required, emailrules.email]"
              class=""
              color="#45a622"
              outlined
              placeholder="Email"
            ></v-text-field>
            <h3 class="text-left">Password</h3>
            <v-text-field
              dense
              v-model="userInfo.password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :passrules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
              color="#45a622"
              outlined
              placeholder="Password"
            ></v-text-field>
            <NuxtLink class="mb-12 float-right" to="/auth/signup">
              Forgot Password
            </NuxtLink>

            <v-btn
              class="btn1"
              block
              color="#45A622"
              @click="loginUser"
              :disabled="!valid"
            >
              LOG IN</v-btn
            >
            <h4 class="mt-2 float-right" to="/auth/signup">
              Don’t have a Procquire account?<NuxtLink
                class="mb-2 float-right"
                to="/auth/signup"
              >
                Signup
              </NuxtLink>
            </h4>
          </v-form>
        </v-layout>
      </v-card>
    </v-layout>
  </v-layout>
</template>
<script>
const request = require("request");
export default {
  name: "login",
  layout: "default",
  components: {},
  data() {
    return {
      radios: null,

      errors: [],
      valid: false,
      userInfo: {
        email: "",

        password: ""
      },
      country: null,
      form: {
        min: 18,
        max: 100
      },
      number: 0,
      emailrules: {
        required: value => !!value || "Required.",
        counter: value => value.length <= 20 || "Max 20 characters",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      },
      show1: false,

      passrules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      },
      password: "Password",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
        min: v => v >= this.form.min || `The Min is ${this.form.min}`,
        max: v => v <= this.form.max || `The Max is ${this.form.max}`
      }
    };
  },
  mounted() {},
  methods: {
    checkForm: function(e) {
      if (this.fullname && this.email) return true;
      this.errors = [];
      if (!this.fullname) this.errors.push("Fullname required.");
      if (!this.email) this.errors.push("Email required.");
      e.preventDefault();
    },

    loginUser() {
      const userEmail = this.userInfo.email;
      const userPassword = this.userInfo.password;

      const AITRABLE_BASE_ID = "appnJAjIlkXhoYRVs";
      const AIRTABLE_BASE_NAME = "users";

      request(
        {
          url: `https://api.airtable.com/v0/${AITRABLE_BASE_ID}/${AIRTABLE_BASE_NAME}?fields=Email&fields=password&filterByFormula=SEARCH("${userEmail}",+Email)`,
          headers: {
            Authorization: "Bearer keyqUz7Z3x5vUjDzW"
          }
        },
        function(err, res, body) {
          if (err) {
            return console.error(err);
          }

          let jsonBody = JSON.parse(body);
          //check if any user was returned
          if (
            jsonBody["records"].length > 0 &&
            jsonBody["records"][0]["fields"]["password"] === userPassword
          ) {
            // if a user was returned, authenticate
            alert("Authenticated!");
            //TODO authenticate and route to dashboard
          } else {
            alert("Invalid credentials!");
            // if no user was returned, throw error
            // ask for valid login credentials
          }
        }
      );
    }
  }
};
</script>
<style scoped>
.main-layout {
  height: 100vh;
  width: 100vw;
}
.right-nav {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.auth-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
a {
  text-decoration: none;
  color: #45a622;
  transition: 0.5s ease;
}
a:hover {
  color: #dfd3d3;
}

.btn {
  border: 0;
  border-radius: 0;
  padding: 15px 0;
  font-size: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fff;
  transition: all 0.5s ease;
  -webkit-appearance: none;
}
.btn:hover,
.btn:focus {
  background: #fff;
  color: #fff;
}
.btn1 {
  padding: 15px 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff !important;
  border-radius: 4px solid #ec6382;
}
.login {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid rgb(228, 214, 214);
  padding: 30px;
  max-width: 500px;
  margin: 0 14px;
}

.text-white input {
  color: white !important;
}
.inp {
  height: 40px;
}
</style>
