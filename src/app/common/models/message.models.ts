export class Message {
  saveMessageToServer(): any {
    throw new Error("Method not implemented.");
  }
  saveMessagesToServer(): any {
    throw new Error("Method not implemented.");
  }
  constructor(
        public from: String,
        public to: String,
        public read: Boolean,
        public reason: String,
        public owner: String,

    ) {}
}
