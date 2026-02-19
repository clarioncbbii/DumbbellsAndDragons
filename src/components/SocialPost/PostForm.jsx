import * as Dialog from "@radix-ui/react-dialog";
import DeleteDialog from "./DeleteDialog";

export default async function PostForm({
  handle,
  trigger,
  description,
  prefill,
  username,
  styles,
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.btn_primary}>{trigger}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.form_overlay} />
        <Dialog.Content className={styles.Content}>
          <Dialog.Title className={styles.section_title}>
            {trigger}
          </Dialog.Title>

          {prefill ? (
            <Dialog.Description className={styles.Description}>
              You posted at: {formattedTime} {formattedDate}
            </Dialog.Description>
          ) : null}

          <Dialog.Description className={styles.Description}>
            {description}
          </Dialog.Description>
          <form className={styles.user_form} action={handle}>
            <fieldset>
              <div>
                <input
                  name="post_id"
                  hidden
                  defaultValue={prefill?.post_id}
                ></input>
              </div>

              <label htmlFor="title"> Post Title: </label>
              <input
                name="title"
                placeholder="Name your tale..."
                defaultValue={prefill?.post_content}
              />

              <label htmlFor="content"> Post Content: </label>
              <textarea
                name="content"
                placeholder="Go on adventurer, share..."
                defaultValue={prefill?.post_content}
              />
            </fieldset>

            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <button type="submit" className={`${styles.btn_primary} green`}>
                Confirm
              </button>
            </div>
          </form>
          {prefill ? (
            <DeleteDialog styles={styles} post={prefill} username={username} />
          ) : null}

          <Dialog.Close asChild>
            <button className={styles.btn_secondary} aria-label="Close">
              Cancel
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
