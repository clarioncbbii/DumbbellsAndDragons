import * as HoverCard from "@radix-ui/react-hover-card";
import styles from "./EditHoverStyle.module.css";

export default function EditHover({ trigger }) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <>{trigger}</>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className={styles.Content} sideOffset={5}>
          <p> Select &apos;Edit Character&apos; to change</p>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
