import FancyButton from "@/components/UI/Elements/Button/Button";

export default function NotFound() {
  return (
      <div className={'notFound'}>
            <h1 className={'notFoundTitle'}>Oops!</h1>
            <h2 className={'notFoundTitle'}>La página que solicitaste no se puede encontrar.</h2>
            <p>La URL puede estar mal escrita o la página que buscas ya no existe, como la ciudad perdida de la Atlántida...</p>
            <FancyButton theme='button-1' link='/'>Volver a la página principal</FancyButton>
      </div>
  )
}