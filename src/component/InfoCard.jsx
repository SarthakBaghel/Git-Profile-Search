const InfoCard = (props) => {
  return (
    <div className="flex justify-center items-center gap-20 border-2 p-8 rounded-xl">
      <img src={props.imgURL} alt="avatar" height={350} width={350} />
      <div className="flex flex-col gap-6 text-lg font-thin p-4 rounded-lg">
        <p>Public Repositeries : {props.repos}</p>
        <p>Followers: {props.followers}</p>
        <p>Following: {props.following}</p>
      </div>
    </div>
  )
}

export default InfoCard