import * as AlertDialog from "@radix-ui/react-alert-dialog";
import styles from "./EditDialogStyles.module.css";
import formStyles from "@/app/choose-class/[class]/complete-character/complete-character.module.css";

export default async function EditDialog({ userQuery, handle }) {
  return (
    <AlertDialog.Root className={styles.Root}>
      <AlertDialog.Trigger asChild>
        <button className={`${styles.btn_primary}`}>
          Edit Character
          <svg className="cl-buttonArrowIcon self-center h-2 w-4">
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
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.Overlay} />
        <AlertDialog.Content className={styles.Content}>
          <AlertDialog.Title className={styles.Title}>
            Edit Character
          </AlertDialog.Title>

          <AlertDialog.Description className={styles.Description}>
            Your form changes with every day of growth, share your changes with
            us...
          </AlertDialog.Description>
          <div
            style={{
              display: "grid",
              gap: 25,
              justifyContent: "center",
              color: "white",
            }}
          >
            <form action={handle} className={formStyles.charSheet_form}>
              <section className={formStyles.user_form}>
                <fieldset className="flex flex-row justify-around content-center align-middle p-4 text-center ">
                  <legend className={formStyles.class_showcase_name}>
                    Describe Yourself To The World...
                  </legend>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="age">Age</label>
                    <input
                      name="age"
                      type="number"
                      min={0}
                      max={99}
                      required
                      defaultValue={userQuery?.age}
                    />{" "}
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="gender">Gender</label>
                    <select
                      name="gender"
                      type="text"
                      defaultValue={userQuery?.gender}
                      required
                    >
                      <option value={"female"}>Female</option>
                      <option value={"male"}>Male</option>
                      <option value={"not specified"}>Not Specified</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="weight">Weight</label>{" "}
                    <input
                      className="placeholder:italic placeholder:"
                      name="weight"
                      type="number"
                      required
                      defaultValue={userQuery?.weight}
                      placeholder="         kg"
                    />
                  </div>
                </fieldset>
                <fieldset className="flex flex-col content-center align-middle gap-2 p-4">
                  <label htmlFor="bio">Tell us your story...</label>
                  <textarea
                    className="placeholder:italic"
                    placeholder="Share the tale of your past and your goals on this earthly plane..."
                    name="bio"
                    defaultValue={userQuery?.bio}
                    required
                  />
                  <button className={styles.btn_primary} type="submit">
                    I wish to journey on anew...
                  </button>
                </fieldset>
              </section>
            </form>
          </div>
          <AlertDialog.Cancel asChild>
            <button className={`${styles.btn_secondary}`}>
              Return
              <svg className="cl-buttonArrowIcon self-center h-2 -scale-x-100 w-5">
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
          </AlertDialog.Cancel>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
