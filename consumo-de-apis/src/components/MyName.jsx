import useFetchCharDBZ from "../hooks/useFetchCharAPI";

export default function MyName() {

  const { loading, error, ret } = useFetchCharDBZ("10");
  if (loading) {
    return (<div>Loading</div>)
  }
  if (error) {
    return (<div>Ocorreu um erro inesperado</div>)
  }

    return(
        <div>
            <img src={ret.image} className="base" width="170" height="179" alt="" />
        </div>
    )
}