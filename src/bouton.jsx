export function Btn({onClick, id}) {
  return <button id={id} onClick={onClick} className="btn bg-green-400 border-2 rounded-2xl px-10" >{id}</button>
}

export function Point({onClick}) {
  return  <button onClick={onClick} id="." class="btn bg-green-400 border-2 rounded-2xl px-10">.</button>
}

export function Plus({onClick}) {
  return  <button onClick={onClick} id="+" class="btn bg-green-400 border-2 rounded-2xl px-10">+</button>
}

export function Minus({onClick}) {
  return  <button onClick={onClick} id="-" class="btn bg-green-400 border-2 rounded-2xl px-10">-</button>
}

export function Equal({onClick}) {
  return  <button onClick={onClick} id="equal" class=" bg-green-400 border-2 rounded-2xl px-10">=</button>
}

export function Multi({onClick}) {
  return  <button onClick={onClick} id="*" class="btn bg-green-400 border-2 rounded-2xl px-10">*</button>
}

export function Div({onClick}) {
  return  <button onClick={onClick} id="/" class="btn bg-green-400 border-2 rounded-2xl px-10">/</button>
}

export function Clear({onClick}) {
  return  <button onClick={onClick} id="clear" class=" bg-green-400 border-2 rounded-2xl px-10">C</button>
}


