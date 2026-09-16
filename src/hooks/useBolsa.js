import useLocalStorage from './useLocalStorage';

function useBolsa() {
  const [bolsa, setBolsa] = useLocalStorage('verduleria:bolsa', []);

  const agregarOQuitar = (producto) => {
    setBolsa((prev) => {
      const yaEsta = prev.some((p) => p.id === producto.id);
      return yaEsta
        ? prev.filter((p) => p.id !== producto.id)
        : [...prev, producto];
    });
  };

  const vaciar = () => setBolsa([]);

  const estaEnLaBolsa = (id) => bolsa.some((p) => p.id === id);

  const bolsaTotal = bolsa.length;

  return { bolsa, bolsaTotal, estaEnLaBolsa, agregarOQuitar, vaciar };
}

export default useBolsa;