import { db } from "@/utils/dbConnection";
import EditDialog from "../EditAlert/EditDialog";
import EditHover from "../EditAlert/EditHover";

export default async function FormSection({
  styles,
  classChoice,
  classQuery,
  user,
  userQuery,
  handle,
}) {
  // if (!user) {
  //   const dbClasses = (
  //     await db.query(`SELECT id FROM dd_classes WHERE class_name = ($1)`, [
  //       classQuery.name,
  //     ])
  //   ).rows;
  //   console.log(dbClasses[0].id);
  // } else {
  //   console.log("user logged in");
  //   console.log(user);
  //   console.log(classChoice);
  // }

  // this function will have to be in the page.js for complete-character --> pass the props through

  return (
    <form className={styles.charSheet_form} action={handle}>
      <section className={styles.user_form}>
        <fieldset className="flex flex-row justify-around content-center align-middle p-4 text-center ">
          {!userQuery?.clerk_id ? (
            <legend className={styles.class_showcase_name}>
              Describe Yourself To The World...
            </legend>
          ) : (
            <legend className={styles.class_showcase_name}>
              But everyone&apos;s story can be retold...
            </legend>
          )}

          <div className="flex flex-col gap-3">
            <label htmlFor="age">Age</label>
            {!userQuery?.clerk_id ? (
              <input name="age" type="number" min={0} max={99} required />
            ) : (
              <EditHover
                trigger={<input disabled defaultValue={userQuery?.age} />}
              />
            )}
          </div>

          {/* could we have a gender component that sets searchParams  and the image displayed is conditional on the search params?*/}

          <div className="flex flex-col gap-3">
            <label htmlFor="gender">Gender</label>
            {!userQuery?.clerk_id ? (
              <select
                name="gender"
                type="text"
                defaultValue={"Select..."}
                required
              >
                <option disabled>Select...</option>
                <option value={"female"}>Female</option>
                <option value={"male"}>Male</option>
                <option value={"not specified"}>Not Specified</option>
              </select>
            ) : (
              <>
                <EditHover
                  trigger={
                    <select defaultValue={userQuery.gender} disabled>
                      <option value={"female"}>Female</option>
                      <option value={"male"}>Male</option>
                      <option value={"not specified"}>Not Specified</option>
                    </select>
                  }
                />
              </>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="weight">Weight</label>
            {!userQuery?.clerk_id ? (
              <input
                className="placeholder:italic placeholder:"
                name="weight"
                type="number"
                required
                placeholder="         kg"
              />
            ) : (
              <EditHover
                trigger={<input disabled defaultValue={userQuery?.weight} />}
              />
            )}
          </div>
        </fieldset>
        <fieldset className="flex flex-col content-center align-middle gap-2 p-4">
          {!userQuery?.clerk_id ? (
            <>
              <label htmlFor="bio">Tell us your story...</label>
              <textarea
                className="placeholder:italic"
                placeholder="Share the tale of your past and your goals on this earthly plane..."
                name="bio"
                defaultValue={userQuery?.bio}
                required
              />
            </>
          ) : (
            <>
              <label>Your story so far...</label>
              <EditHover
                trigger={<textarea defaultValue={userQuery?.bio} disabled />}
              />
            </>
          )}
        </fieldset>

        {userQuery?.clerk_id ? (
          <EditDialog userQuery={userQuery} handle={handle} />
        ) : null}
      </section>

      <div className={styles.class_card}>
        <h3 className={styles.class_showcase_name}>Class Features</h3>
        {!userQuery?.clerk_id ? (
          <>
            <h4 className={styles.class_showcase_tagline}>
              {classQuery.details_title}
            </h4>
            <p className={styles.showcase_list}>{classQuery.details_tags[0]}</p>
            <p className={styles.showcase_list}>{classQuery.details_tags[1]}</p>
          </>
        ) : (
          <>
            <h4 className={styles.class_showcase_tagline}>
              {userQuery.details_title}
            </h4>
            <p className={styles.showcase_list}>{userQuery.details_tags[0]}</p>
            <p className={styles.showcase_list}>{userQuery.details_tags[1]}</p>
          </>
        )}
      </div>

      {!userQuery?.clerk_id ? (
        <button type="submit" className={styles.btn_primary}>
          <p>Continue</p>
          <svg className="cl-buttonArrowIcon self-center h-2">
            <path
              className="self-center"
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
            ></path>
          </svg>
        </button>
      ) : null}
    </form>
  );
}
