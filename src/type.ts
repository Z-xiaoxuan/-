export interface Message {
  role: "assistant" | "user" | "system";
  content: string;
}

export interface FileInfo {
  name: string;
  type: string;
  size: number;
  /**文件上传后拿到的ID */
  id: any;
  fn?: any;
}
