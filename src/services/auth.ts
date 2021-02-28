
interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function singIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'sakhduaishduihasudhasshjfa3',
        user: {
          name: 'Natan',
          email: 'natanrotta@gmail.com'
        },
      })
    }, 2000)
  });
}