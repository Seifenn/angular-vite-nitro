import { Component, signal, OnInit, WritableSignal } from "@angular/core";
@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <h2>Vite + Angular</h2>
    <h2>{{ msg() }}</h2>

    <br /><br />

    <button (click)="increment()">Count {{ count() }}</button>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  `,
})
export class AppComponent implements OnInit {
  count = signal(0);
  msg = signal("Init");

  async ngOnInit(): Promise<void> {
    this.msg.set(await getMessageData());
  }

  increment() {
    this.count.update((cnt) => ++cnt);
  }
}

const getMessageData = async () => {
  const data = await fetch("/api/v1/hello");
  const message = (await data.json()).message;
  return message;
};
