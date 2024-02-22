const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl text-indigo-700">{title}</h1>
      <p className="text-lg text-indigo-400 text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
};

export default Header;
