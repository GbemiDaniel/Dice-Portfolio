import { cn } from "@/lib/utils";
import styles from "./Container.module.css";

export function Container({ children, className }) {
    return (
        <div className={cn(styles.globalContainer, className)}>
            {children}
        </div>
    );
}