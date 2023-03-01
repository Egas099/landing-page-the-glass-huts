export function downloadAsJSON(fileName: string, data: string) {
    let a = document.createElement("a");
    let file = new Blob([data], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = fileName + ".json";
    a.click();
}