import scss from "./scss/test.module.scss";

function SectionBg() {
  return (
    <div className={scss.animationWrapper}>
      <div className={`${scss.particle} ${scss.particle001}`}></div>
      <div className={`${scss.particle} ${scss.particle002}`}></div>
      <div className={`${scss.particle} ${scss.particle003}`}></div>
      <div className={`${scss.particle} ${scss.particle004}`}></div>
    </div>
  );
}

export default SectionBg;
