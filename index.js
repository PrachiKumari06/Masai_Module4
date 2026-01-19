var searchRange = function(nums, target) {
    let l = 0, r = nums.length - 1;
    let first = -1, last = -1;

    // find first position
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            first = mid;
            r = mid - 1; // move left
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    l = 0; r = nums.length - 1;

    // find last position
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            last = mid;
            l = mid + 1; // move right
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return [first, last];
};

