import 'mocha';

import { renderHook } from '@testing-library/react-hooks';
import { useScreenOrientation } from '../useScreenOrientation';

test('Use Screen Orientation', () => {
	const { result } = renderHook(() => useScreenOrientation());

	expect(result.current).toEqual('portrait');
});
