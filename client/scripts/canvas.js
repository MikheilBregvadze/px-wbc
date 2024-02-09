import '../styles/style.css'

export const InitCanvas = () => {
    const app = new PIXI.Application({ width: 800, height: 600 });
    document.body.appendChild(app.view);

}