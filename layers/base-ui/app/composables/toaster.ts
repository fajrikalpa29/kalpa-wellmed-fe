import toasteventbus from "primevue/toasteventbus";

export const showAlert = (
  title:string,
  message: string[] | string,
  type: "info" | "success" | "warn" | "error" | "secondary" | "contrast"
): void => {
  const msg = message instanceof Array ? message.join(", ") : message;
  toasteventbus.emit("add", {
    severity: type,
    summary: title,
    detail: msg,
    life: 3000,
    closable: true,
  });
};
