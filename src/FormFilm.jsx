import React, { Component } from 'react';



class FormFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filmname: '',
          urlname: '',
          textarea: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }
      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
        
       }
       submitForm(e) {
        e.preventDefault();

        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
           };
           
        const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
        
        fetch(url, config)
        .then(res => res.json())
         .then(res => {
           if (res.error) {
             alert(res.error);
           } else {
            alert('Erreur lors de l\'ajout d\'un film');
           }
         }).catch(e => {
           console.error(e);
           alert(`Film très bon ;) !`);
         });
       }
       
       render(){

        return(
            <div className="Formfilm">
                <h1>Saisi d'un film</h1>

                <form onSubmit={this.submitForm}>
                <fieldset>
                    <legend>Informations</legend>
                    <div className="form-data">
                    <label htmlFor="lastname">Nom du film</label>
                    <input
                        type="text"
                        id="filmname"
                        name="filmname"
                        onChange={this.onChange}
                        value={this.state.filmname}
                    />
                    </div>

                    <div className="form-data">
                    <label htmlFor="firstname">Url du film</label>
                    <input
                        type="text"
                        id="urlname"
                        name="urlname"
                        onChange={this.onChange}
                        value={this.state.firstname}
                    />
                    </div>

                    <div className="form-data">
                    <label htmlFor="textarea">Texte</label>
                    <input
                        type="textarea"
                        id="textarea"
                        name="textarea"
                        onChange={this.onChange}
                        value={this.state.textarea}
                    />
                    </div>
                    <hr />
                    <div className="form-data">
                    <input type="submit" value="Envoyer" />
                    </div>
                </fieldset>
                </form>
                </div>
       )
    }
}
export default FormFilm;