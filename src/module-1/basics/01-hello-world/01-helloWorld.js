const helloWorld = () => {
    return "Hello World!";
}

const alerta = () => {
    try {
      return alert(helloWorld());
    } catch (error) {
        return false;
    }
}

module.exports = {
    helloWorld,
    alerta
}