/**
 * @jest-environment jsdom
 */

// Dom  测试

describe('Dom测试', () => {

  const btnHtml =
`<div>
  <button id='btn'>小按钮</button>
</div> `;

  it('测试按钮是否被渲染 ', () => {
    document.body.innerHTML = btnHtml;
    // console.log(document.getElementById('btn'), document.getElementById('btn').toString())
    expect(document.getElementById('btn')).not.toBeNull();
    expect(document.getElementById('btn').toString()).toBe("[object HTMLButtonElement]");
  });

  it('测试点击事件', () => {
    const onclick = jest.fn();
    document.body.innerHTML = btnHtml;

    const btn = document.getElementById('btn');
    expect(onclick).not.toBeCalled();

    btn.onclick = onclick;
    btn.click();
    expect(onclick).toBeCalled();
    expect(onclick).toHaveBeenCalledTimes(1);

    btn.click();
    btn.click();
    expect(onclick).toHaveBeenCalledTimes(3);
  });
});
