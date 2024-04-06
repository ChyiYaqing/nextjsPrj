import LikeButton from './like-button';

// React 组件应该大写，以区分纯HTML和JavaScript
function Header({ title }) {
  // 可以在大括号内添加任何JavaScript表达式
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      {/* Nexting the Header component */}
      <Header title="Develop. Preview. Ship." />

      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}