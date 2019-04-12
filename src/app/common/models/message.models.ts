export class Message {
  constructor(
        public from: String,
        public to: String,
        public read: Boolean,
        public reason: String,
        public owner: String,

    ) {}
}
