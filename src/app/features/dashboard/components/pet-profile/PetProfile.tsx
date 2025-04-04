import cake from "../../../../../assets/icons/cake.svg";
import edit from "../../../../../assets/icons/edit.svg";
import home from "../../../../../assets/icons/home.svg";
import dog2 from "../../../../../assets/images/dog2.jpeg";
import profile from "../../../../../assets/images/profile.png";
import profile2 from "../../../../../assets/images/profile2.jpeg";
import styles from "./PetProfile.module.scss";

export const PetProfile = () => {
  return (
    <div className={styles.content}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>Pet Profile</h1>

        <div className={styles.basicInfo}>
          <div className={styles.avatar}>
            <img src={dog2} alt="" />
          </div>

          <div className={styles.info}>
            <div className={styles.nameContainer}>
              <h2 className={styles.name}>Maxi</h2>
              <button className={styles.editButton}>
                <img src={edit} alt="" />
              </button>
            </div>

            <div className={styles.tags}>
              <div className={styles.tag}>Dog</div>
              <div className={styles.divider}></div>
              <div className={styles.tag}>Border Collie</div>
            </div>
          </div>
        </div>

        <section className={styles.appereance}>
          <div className={styles.subtitle}>Appearance</div>
          <p>
            Brown-Dark-White mix, with light eyebrows shape and a heart shaped
            patch on left paw.
          </p>
        </section>

        <section className={styles.characteristics}>
          <div className={styles.item}>
            <div className={styles.label}>Gender</div>
            <div className={styles.value}>Male</div>
          </div>
          <div className={styles.divider}></div>

          <div className={styles.item}>
            <div className={styles.label}>Size</div>
            <div className={styles.value}>Medium</div>
          </div>
          <div className={styles.divider}></div>

          <div className={styles.item}>
            <div className={styles.label}>Weight</div>
            <div className={styles.value}>70 kg</div>
          </div>
        </section>

        <section className={styles.importantDates}>
          <div className={styles.subtitle}>Important Dates</div>

          <div className={styles.item}>
            <div className={styles.iconContainer}>
              <img src={cake} alt="" />
            </div>
            <div className={styles.info}>
              <div className={styles.label}>Birthday</div>
              <div className={styles.value}>3 November 1992</div>
            </div>
            <div className={styles.age}>3 Years old</div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.item}>
            <div className={styles.iconContainer}>
              <img src={home} alt="" />
            </div>
            <div className={styles.info}>
              <div className={styles.label}>Adoption Day</div>
              <div className={styles.value}>6 January 2020</div>
            </div>
          </div>
        </section>
        <section className={styles.caretakers}>
          <div className={styles.subtitle}>Caretakers</div>
          <div className={styles.item}>
            <img src={profile} alt="" className={styles.avatar} />

            <div className={styles.info}>
              <div className={styles.name}>Esther Howard</div>
              <div className={styles.email}>esther.howard@gmail.com</div>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.item}>
            <img src={profile2} alt="" className={styles.avatar} />

            <div className={styles.info}>
              <div className={styles.name}>Esther Howard</div>
              <div className={styles.email}>esther.howard@gmail.com</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
