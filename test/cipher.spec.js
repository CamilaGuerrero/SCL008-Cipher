describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz",33),"hijklmnopqrstuvwxyzabcdefg")
    });
    it('debería retornar "zab" para "abc" con offset -1',()=>{
      assert.equal(cipher.encode("abc",-1),"zab")
    });
    it('debería retornar "ZAB" para "ABC" con offset -1',() =>{
      assert.equal(cipher.encode("ABC",-1),"ZAB")
    });
    it('debería retornar "012" para "123" con offset -1',()=>{
      assert.equal(cipher.encode("123",-1),"012")
    })
    it('debería retornar "3456789012" para "1234567890" con offset 2', () => {
      assert.equal(cipher.encode("1234567890",2),"3456789012")
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33),"HIJKLMNOPQRSTUVWXYZABCDEFG")
    });
    it('debería retornar "!#$%&/()=" para "!#$%&/()=" con offset 2', () => {
    assert.equal(cipher.encode("!#$%&/()=",2),"!#$%&/()=")
    });
    });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg",33),"abcdefghijklmnopqrstuvwxyz")
    });
    it('debería retornar "abc" para "zab" con offset -1',()=>{
      assert.equal(cipher.decode("zab",-1),"abc")
    });
    it('debería retornar "ABC" para "ZAB" con offset -1',() =>{
      assert.equal(cipher.decode("ZAB",-1),"ABC")
    });
    it('debería retornar "012" para "123" con offset -1',()=>{
      assert.equal(cipher.decode("012",-1),"123")
    })
    it('debería retornar "1234567890" para "3456789012" con offset 2', () => {
      assert.equal(cipher.decode("3456789012",2),"1234567890")
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });
    it('debería retornar "!#$%&/()=" para "!#$%&/()=" con offset 2', () => {
      assert.equal(cipher.decode("!#$%&/()=",2),"!#$%&/()=")
    });
  });

});

