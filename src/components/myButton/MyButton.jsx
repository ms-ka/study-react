//Guzik jest komponentem który wykonuje określoną akcję po kliknięciu , w zależności od funkcji przekazanej przez props

//opcja bez strukturyzacji z obiektem props

//W tej wersji props jest używany jako obiekt, a wszystkie właściwości są odwoływane przez props.klucz.

// import './myButton.css'
// function MyButton(props){
//     console.log(props)
//     return <button onClick={props.func}
//     className='my-button'> {props.text} </button>
// }
// export default MyButton;

//wariant z destrukturyzacją
//W tej wersji props jest destrukturyzowany bezpośrednio w parametrach funkcji.
//używamy znaczenie wg kluczy, używamy klucze obiektu
import './myButton.css'

const handleDefaultClick = () => {
    console.log( 'default click');
};

//Jeśli funkcja kliknięcia (func) nie zostanie przekazana, domyślnie 
//wywoła handleDefaultClick, który po prostu loguje „default click” do konsoli.

function MyButton({func=handleDefaultClick, isDanger=true, text='Lets start'}) {
//Ustawiono domyślne wartości dla func, isDanger i text, co czyni kod bardziej przejrzystym i unika konieczności obsługi undefined wartości.    

  return <button onClick={func} 
  className={`my-button ${isDanger ? 
  'btn-danger': 'btn-primary'}`}>{text}</button>
}

export default MyButton;