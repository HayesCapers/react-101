 
 var data = [
  {
    author:{
      avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
      name:"neo"
    },
    commentHeading: "I am the One.",
    text: "Humanity, relax. I will save you.",
    date: "Today",
    userBadge: [ 
      'Superman',
      'Herald',
      'Engineer'
    ]
  },

  {
    author:{
      avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
      name:"Morpheus"
    },
    commentHeading: "There is no spoon.",
    text: "Don't htink you are. KNow you are.",
    date: "Two days ago",
    userBadge: [ 
      'The man',
      'Bard',
      'Samurai swordsman'
    ]
  },

  {
    author:{
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwxXofGtBBwe2SflsIeOT2quTEBudxdubdp4hPLQymhnU3efR",
      name:"Babe"
    },
    commentHeading: "Ham not SPAM",
    text: "THIS IS HAMBOOK NOT SPAMBOOK... assholes",
    date: "Two days ago",
    userBadge: [ 
      'Five-star Bacon',
      'Breakfast',
      'God'
    ]
  }
] 

function UserInfo(props){
  return(
    <div className="UserInfo col-sm-2">
      <Avatar avatarUrl={props.author.avatarUrl} name={props.author.name} />
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
  )
}

function Avatar(props){
  return(
    <img className="Avatar" src={props.avatarUrl} alt={props.name} />
  )
}

function CommentBody(props){
  return(
    <div className="Comment-body col-sm-10">
      <h3>{props.commentHeading}</h3>
      <div className="Comment-date">
        {props.date}
      </div>
      <div className="Comment-text">{props.text}</div>
    </div>
  )
}

function Badge(props){
  return(
      <div className="badge">{props.userBadge}</div>
  )
}

function Comment(props) {
  return (
    <div className="Comment row">
      <UserInfo author={props.author}/>
      <CommentBody commentHeading={props.commentHeading} date={props.date} text={props.text}/>
      <div className="UserBadges col-sm-10">
        {props.userBadge.map((badge,index)=>{
          return(<Badge key={index} userBadge={badge} />)
        })}
      </div>
    </div>
  );
}

function Application(props){
  var hamNBaconPlace = [];
  props.data.map((l11l1ll,ham)=>{
     hamNBaconPlace.push(<Comment key={ham} author={l11l1ll.author} userBadge={l11l1ll.userBadge} text={l11l1ll.text} commentHeading={l11l1ll.commentHeading} date={l11l1ll.date}/>)
  })
  return(
    <div className='container'>
      <div className='col-sm-6 col-sm-offset-3'>
        <h1>Some HamBook Ham</h1>
        {hamNBaconPlace}
      </div>
    </div>
  )
}

ReactDOM.render(
  <Application data={data} />,
  document.getElementById('root')
)