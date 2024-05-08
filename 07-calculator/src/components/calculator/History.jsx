export default function History({history}) {
  return (
    <div style={{maxHeight:"100px", overflowX: "auto"}}>
        {history?.map((h,i) => {
           return (
            <p key={i}>
                {h}
            </p>
           )
        })}
    </div>
  )
}
