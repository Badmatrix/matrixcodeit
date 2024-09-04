/* eslint-disable react/prop-types */
export default function SocialItem({ social }) {
    const{icon,name,link}=social
  return (
      <li title={name}><a href={link} target="_blank">{icon }</a></li>
  )
}
