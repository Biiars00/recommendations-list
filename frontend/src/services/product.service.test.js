import axios from 'axios';
import getProducts from './product.service';
import mockProducts from '../mocks/mockProducts';

jest.mock('axios');

describe('getProducts', () => {
  it('Deve retornar os produtos corretamente quando a requisição for bem-sucedida', async () => {
    axios.get.mockResolvedValueOnce({ data: mockProducts });

    const result = await getProducts();

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/products');
    expect(result).toEqual(mockProducts);
  });

  it('Deve lançar um erro quando a requisição falhar', async () => {
    const error = new Error('Falha na requisição');

    axios.get.mockRejectedValueOnce(error);

    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await expect(getProducts()).rejects.toThrow('Falha na requisição');
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/products');
    spy.mockRestore();
  });
});