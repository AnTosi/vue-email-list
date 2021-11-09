// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// // generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// ciclo for con list item all'interno, axios.get per prendere i dati dal database
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


const app = new Vue ({
    el: "#root",

    data: {
        email: "",
    },

    mounted(){
        axios
        .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
        .then(resp => {
            console.log(resp);
            this.email =(resp.data.response);
        })
    }
})