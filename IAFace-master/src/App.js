/*import cv2*/

const video = document.getElementById('cam')
/*
function recko() { 
    const skinColorUpper = hue => new cv.Vec(hue, 0.8 * 255, 0.6 * 255);
    const skinColorLower = hue => new cv.Vec(hue, 0.1 * 255, 0.05 * 255);

    const makeHandMask = (img) => {
      const imgHLS = img.cvtColor(cv.COLOR_BGR2HLS);
      const rangeMask = imgHLS.inRange(skinColorLower(0), skinColorUpper(15));
      const blurred = rangeMask.blur(new cv.Size(10, 10));
      const thresholded = blurred.threshold(200,255,cv.THRESH_BINARY);

  return thresholded;
    };

    const getHandContour = (handMask) => {
      const contours = handMask.findContours(
        cv.RETR_EXTERNAL,
        cv.CHAIN_APPROX_SIMPLE
      );
      return contours.sort((c0, c1) => c1.area - c0.area)[0];
    };

const getRoughHull = (contour, maxDist) => {
  const hullIndices = contour.convexHullIndices();
  const contourPoints = contour.getPoints();
  const hullPointsWithIdx = hullIndices.map(idx => ({
    pt: contourPoints[idx],
    contourIdx: idx
  }));
  const hullPoints = hullPointsWithIdx.map(ptWithIdx => ptWithIdx.pt);

  const ptsBelongToSameCluster = (pt1, pt2) => ptDist(pt1, pt2) < maxDist;
  const { labels } = cv.partition(hullPoints, ptsBelongToSameCluster);
  const pointsByLabel = new Map();
  labels.forEach(l => pointsByLabel.set(l, []));
  hullPointsWithIdx.forEach((ptWithIdx, i) => {
    const label = labels[i];
    pointsByLabel.get(label).push(ptWithIdx);
  });

  const getMostCentralPoint = (pointGroup) => {
    const center = getCenterPt(pointGroup.map(ptWithIdx => ptWithIdx.pt));
    return pointGroup.sort(
      (ptWithIdx1, ptWithIdx2) => ptDist(ptWithIdx1.pt, center) - ptDist(ptWithIdx2.pt, center)
    )[0];
  };
  const pointGroups = Array.from(pointsByLabel.values());
  return pointGroups.map(getMostCentralPoint).map(ptWithIdx => ptWithIdx.contourIdx);
};


  const getHullDefectVertices = (handContour, hullIndices) => {
    const defects = handContour.convexityDefects(hullIndices);
    const handContourPoints = handContour.getPoints();

    const hullPointDefectNeighbors = new Map(hullIndices.map(idx => [idx, []]));
    defects.forEach((defect) => {
      const startPointIdx = defect.at(0);
      const endPointIdx = defect.at(1);
      const defectPointIdx = defect.at(2);
      hullPointDefectNeighbors.get(startPointIdx).push(defectPointIdx);
      hullPointDefectNeighbors.get(endPointIdx).push(defectPointIdx);
    });

    return Array.from(hullPointDefectNeighbors.keys())
      .filter(hullIndex => hullPointDefectNeighbors.get(hullIndex).length > 1)
      .map((hullIndex) => {
        const defectNeighborsIdx = hullPointDefectNeighbors.get(hullIndex);
        return ({
          pt: handContourPoints[hullIndex],
          d1: handContourPoints[defectNeighborsIdx[0]],
          d2: handContourPoints[defectNeighborsIdx[1]]
        });
      });
  };
}*/

  function App() {
    navigator.getUserMedia(
      {video: {} },
      stream => video.srcObject = stream,
      err => console.error(err)
    );
  }

export default App;
