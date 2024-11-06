import './myInput.css'

function MyInput({
  name,
  type = "text",
  placeholder = "default text",
  label = "default label",
}) {
  return (
    <>
    {/* to element HTML, który wyświetla tekst w interfejsie użytkownika. */}
      <label htmlFor={name}>{label}</label> 
      {/* wyświetlony jest tekst label, który jest przekazywany jako props label. */}
      <input 
      placeholder={placeholder} //wskazówka wewnątrz okienka
      type={type} // type domyślnie jest ustawiony jako text
      name={name} //przypisuje atrybut name do inputu
      />
    </>
  );
}

export default MyInput;
