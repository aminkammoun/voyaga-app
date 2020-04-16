new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    voyages: [],
    ID: "",
    singleVoy: [],
    email: "",
    password: "",
    check : false
  },
  created() {
    axios
      .get("http://localhost:3000/api/voyage/")
      .then((res) => {
        this.voyages = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    storeId(num) {
      window.localStorage.setItem("key", num);
    },
    submitForm() {
      axios
        .post("http://localhost:3000/users/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          window.location.href = "index.html";
        })
        .catch((err) => {
          this.check = true;
          setTimeout(() => {
            this.check = false
          }, 2000);
          console.error(err);
        });
    },
  },
});
