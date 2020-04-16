new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    voyages: [],
    ID: "",
    items: [],
  },
  created() {
    this.ID = localStorage.getItem("key");
    axios
      .get("http://localhost:3000/api/voyage/" + this.ID)
      .then((res) => {
        this.voyages = res.data;
        this.items =res.data.productImage;
        console.log(this.items)
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {},
});
