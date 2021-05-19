import React from 'react';
import { create, act } from 'react-test-renderer';
import ProfileStatus from './profile-status';

describe('Profile status component', () => {
  test('Testing status from props isInState', () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="Social status" />);
    });
    const instance = component.root;
    expect(instance.props.status).toBe('Social status');
  });

  test('isSpan', () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="Social status" />);
    });
    const instance = component.root;
    const span = instance.findByType('span');
    expect(span).not.toBe();
  });
  test('span should be displayed with correct status', () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="Social status" />);
    });
    const instance = component.root;
    const span = instance.findByType('span');
    expect(span.children[0]).toBe('Social status');
  });
  test('input should be displayed in edit mode instead of span', () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="Social status" />);
    });
    const instance = component.root;
    const span = instance.findByType('span');
    act(() => span.props.onClick());
    const input = instance.findByType('input');
    expect(input.props.value).toBe('Social status');
  });
  test('callback should be called', () => {
    const mockCallback = jest.fn();
    let component;
    act(() => {
      component = create(<ProfileStatus status="Social status" onStatusChange={mockCallback} />);
    });
    const instance = component.root;
    instance.props.onStatusChange();

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
