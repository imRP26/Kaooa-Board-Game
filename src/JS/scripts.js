import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

// Setting up the game play area
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 0, 175);
camera.lookAt(0, 0, 0);
renderer.setClearColor(0xEBC7B2);
var restartGame = false;
var consoleOutputString = "";

// Selecting the 5 'main' points
const tempPoints = [];
tempPoints.push(new THREE.Vector3(-50, 0, 0)); // P4
tempPoints.push(new THREE.Vector3(0, 50, 0)); // P1
tempPoints.push(new THREE.Vector3(50, 0, 0)); // P3
tempPoints.push(new THREE.Vector3(-80, 30, 0)); // P5
tempPoints.push(new THREE.Vector3(80, 30, 0)); // P2
tempPoints.push(new THREE.Vector3(-50, 0, 0)); // P4

// Constructing lines among the above points
const lineGeometry = new THREE.BufferGeometry().setFromPoints(tempPoints);
const lineMaterial = new THREE.LineBasicMaterial({color: 0x0000FF});
const line = new THREE.Line(lineGeometry, lineMaterial);
scene.add(line);
const circleMaterial = new THREE.MeshBasicMaterial({color: 0x000000, side: THREE.DoubleSide});
const points = [];

// Adding the circles at the 5 'main' points
const circleGeometry1 = new THREE.CircleGeometry(4, 128);
const circle1 = new THREE.Mesh(circleGeometry1, circleMaterial);
circle1.position.set(0, 50, 0);
scene.add(circle1);
points.push(circle1);

const circleGeometry2 = new THREE.CircleGeometry(4, 128);
const circle2 = new THREE.Mesh(circleGeometry2, circleMaterial);
circle2.position.set(80, 30, 0);
scene.add(circle2);
points.push(circle2);

const circleGeometry3 = new THREE.CircleGeometry(4, 128);
const circle3 = new THREE.Mesh(circleGeometry3, circleMaterial);
circle3.position.set(50, 0, 0);
scene.add(circle3);
points.push(circle3);

const circleGeometry4 = new THREE.CircleGeometry(4, 128);
const circle4 = new THREE.Mesh(circleGeometry4, circleMaterial);
circle4.position.set(-50, 0, 0);
scene.add(circle4);
points.push(circle4);

const circleGeometry5 = new THREE.CircleGeometry(4, 128);
const circle5 = new THREE.Mesh(circleGeometry5, circleMaterial);
circle5.position.set(-80, 30, 0);
scene.add(circle5);
points.push(circle5);

// Adding the circles at the 5 'secondary' points
const circleGeometry6 = new THREE.CircleGeometry(4, 128);
const circle6 = new THREE.Mesh(circleGeometry6, circleMaterial);
circle6.position.set(-20, 30, 0);
scene.add(circle6);
points.push(circle6); // P6

const circleGeometry7 = new THREE.CircleGeometry(4, 128);
const circle7 = new THREE.Mesh(circleGeometry7, circleMaterial);
circle7.position.set(20, 30, 0);
scene.add(circle7);
points.push(circle7); // P7

const circleGeometry8 = new THREE.CircleGeometry(4, 128);
const circle8 = new THREE.Mesh(circleGeometry8, circleMaterial);
circle8.position.set(32, 19, 0);
scene.add(circle8);
points.push(circle8); // P8

const circleGeometry9 = new THREE.CircleGeometry(4, 128);
const circle9 = new THREE.Mesh(circleGeometry9, circleMaterial);
circle9.position.set(0, 12, 0);
scene.add(circle9);
points.push(circle9); // P9

const circleGeometry10 = new THREE.CircleGeometry(4, 128);
const circle10 = new THREE.Mesh(circleGeometry10, circleMaterial);
circle10.position.set(-32, 19, 0);
scene.add(circle10);
points.push(circle10); // P10

// Cylinder for Vulture
var vultureCylinderGeometry = new THREE.CylinderGeometry(4, 4, 3, 128);
var vultureCylinderMaterial = new THREE.MeshBasicMaterial({color: 0x3295A8});
var vultureCylinder = new THREE.Mesh(vultureCylinderGeometry, vultureCylinderMaterial);
vultureCylinder.position.set(-100, 25, 0); // Cylinder for Vulture
scene.add(vultureCylinder);

// Cylinders for Crows
const crows = []
var crowCylinderMaterial = new THREE.MeshBasicMaterial({color: 0x8332A8});
var crowCylinderGeometry1 = new THREE.CylinderGeometry(4, 4, 3, 128);
var crowCylinder1 = new THREE.Mesh(crowCylinderGeometry1, crowCylinderMaterial);
crowCylinder1.position.set(100, 55, 0);
scene.add(crowCylinder1);
crows.push(crowCylinder1);

var crowCylinderGeometry2 = new THREE.CylinderGeometry(4, 4, 3, 128);
var crowCylinder2 = new THREE.Mesh(crowCylinderGeometry2, crowCylinderMaterial);
crowCylinder2.position.set(100, 45, 0);
scene.add(crowCylinder2);
crows.push(crowCylinder2);

var crowCylinderGeometry3 = new THREE.CylinderGeometry(4, 4, 3, 128);
var crowCylinder3 = new THREE.Mesh(crowCylinderGeometry3, crowCylinderMaterial);
crowCylinder3.position.set(100, 35, 0);
scene.add(crowCylinder3);
crows.push(crowCylinder3);

var crowCylinderGeometry4 = new THREE.CylinderGeometry(4, 4, 3, 128);
var crowCylinder4 = new THREE.Mesh(crowCylinderGeometry4, crowCylinderMaterial);
crowCylinder4.position.set(100, 25, 0);
scene.add(crowCylinder4);
crows.push(crowCylinder4);

var crowCylinderGeometry5 = new THREE.CylinderGeometry(4, 4, 3, 128);
var crowCylinder5 = new THREE.Mesh(crowCylinderGeometry5, crowCylinderMaterial);
crowCylinder5.position.set(100, 15, 0);
scene.add(crowCylinder5);
crows.push(crowCylinder5);

var crowCylinderGeometry6 = new THREE.CylinderGeometry(4, 4, 3, 128);
var crowCylinder6 = new THREE.Mesh(crowCylinderGeometry6, crowCylinderMaterial);
crowCylinder6.position.set(100, 5, 0);
scene.add(crowCylinder6);
crows.push(crowCylinder6);

var crowCylinderGeometry7 = new THREE.CylinderGeometry(4, 4, 3, 128);
var crowCylinder7 = new THREE.Mesh(crowCylinderGeometry7, crowCylinderMaterial);
crowCylinder7.position.set(100, -5, 0);
scene.add(crowCylinder7);
crows.push(crowCylinder7);

function animate() {
    orbit.update();
    renderer.render(scene, camera);
}

// location[i] = 0 -> The place is empty.
// location[i] = 1 -> The place is occupied by the Vulture.
// location[i] = -1 -> The place is occupied by the Crow.
const location = []
for (let i = 0; i < 10; i++) {
    location.push(0);
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

let turn = 1;
let numCrowsInPlay = 0;
let hasVultureMoved = 0;
let numCrowsCapturedByVulture = 0;
var selectedPointIndex = -1, tempCrowCylinderGeometry = null, tempCrowCylinderMaterial = null, tempCrowCylinder = null;
var currentVulturePosition = -1, crowSelected = false, selectedCrowIndex = -1, crowPointIndex;

function changeVulturePosition(pos) {
    scene.remove(vultureCylinder);
    vultureCylinderGeometry = new THREE.CylinderGeometry(4, 4, 3, 128);
    vultureCylinderMaterial = new THREE.MeshBasicMaterial({color: 0x3295A8});
    vultureCylinder = new THREE.Mesh(vultureCylinderGeometry, vultureCylinderMaterial);
    vultureCylinder.position.set(points[pos].position.x, points[pos].position.y, points[pos].position.z);
    scene.add(vultureCylinder);
    vultureCylinder.rotation.x = -0.5 * Math.PI;
}

// numCrowsInPlay, selectedPointIndex, crowPointIndex
function changeCrowPosition(pos1, pos2, pos3) {
    scene.remove(crows[pos1]);
    tempCrowCylinderGeometry = new THREE.CylinderGeometry(4, 4, 3, 128);
    tempCrowCylinderMaterial = new THREE.MeshBasicMaterial({color: 0x8332A8});
    tempCrowCylinder = new THREE.Mesh(tempCrowCylinderGeometry, tempCrowCylinderMaterial);
    tempCrowCylinder.position.set(points[pos2].position.x, points[pos2].position.y, points[pos2].position.z);
    scene.add(tempCrowCylinder);
    tempCrowCylinder.rotation.x = -0.5 * Math.PI;
    crows[pos1] = tempCrowCylinder;
    if (pos3 != -1)
        location[pos3] = 0;
    location[pos2] = -1;
}

const isCrowCaptured = []
for (let i = 0; i < crows.length; i++) {
    isCrowCaptured.push(0);
}

function removeCrowCapturedByVulture(pos) {
    var capturedCrowIndex = -1;
    for (let i = 0; i < crows.length; i++) {
        if (isCrowCaptured[i] == 0 && points[pos].position.x == crows[i].position.x && points[pos].position.y == crows[i].position.y && points[pos].position.z == crows[i].position.z) {
            capturedCrowIndex = i;
            break;
        }
    }
    isCrowCaptured[capturedCrowIndex] = 1;
    scene.remove(crows[capturedCrowIndex]);
    location[pos] = 0;
    numCrowsCapturedByVulture++;
}

var tempString = "";

function illegalMove(x) {
    if (x == 1)
        tempString = "Illegal move for Crow.\nGive the Crow's move again.\n";
    else
        tempString = "Illegal move for Vulture.\nGive the Vulture's move again.\n";
    console.log(tempString);
    consoleOutputString += tempString;
}

function onClick(event) {
    if (restartGame == true)
        return;
    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length == 0)
        return;
    selectedPointIndex = -1;
    if (turn == 1 && numCrowsInPlay == 7 && crowSelected == false) {
        selectedCrowIndex = -1;
        for (let i = 0; i < intersects.length; i++) {
            for (let j = 0; j < crows.length; j++) {
                if (intersects[i].object.id == crows[j].id) {
                    selectedCrowIndex = j;
                    break;
                }
            }
            if (selectedCrowIndex != -1)
                break;
        }
        crowPointIndex = -1;
        for (let i = 0; i < intersects.length; i++) {
            for (let j = 0; j < points.length; j++) {
                if (intersects[i].object.id == points[j].id) {
                    crowPointIndex = j;
                    break;
                }
            }
            if (crowPointIndex != -1)
                break;
        }
    }
    else {
        selectedPointIndex = -1;
        for (let i = 0; i < intersects.length; i++) {
            for (let j = 0; j < points.length; j++) {
                if (intersects[i].object.id == points[j].id) {
                    selectedPointIndex = j;
                    break;
                }
            }
            if (selectedPointIndex != -1)
                break;
        }
        if (location[selectedPointIndex] != 0)
            return;
    }
    xPos = mouse.x;
    yPos = mouse.y;
    if (turn == 1) { // Crows' turn
        if (numCrowsInPlay < 7) {
            changeCrowPosition(numCrowsInPlay, selectedPointIndex, -1);
            numCrowsInPlay++;
            tempString = "Crow moved to normalized xPos : " + "" + xPos + " and normalized yPos : " + "" + yPos + '\n';
            console.log(tempString);
            consoleOutputString += tempString;
        }
        else {
            if (crowSelected == false) {
                if (location[crowPointIndex] == 0) {
                    illegalMove(1);
                    return;
                }
                tempString = "Crow selected at normalized xPos : " + "" + xPos + " and normalized yPos : " + "" + yPos + '\n';
                console.log(tempString);
                consoleOutputString += tempString;
                crowSelected = true;
                return;
            }
            else {
                if ((crowPointIndex == 0 && selectedPointIndex != 5 && selectedPointIndex != 6) || 
                    (crowPointIndex == 1 && selectedPointIndex != 6 && selectedPointIndex != 7) || 
                    (crowPointIndex == 2 && selectedPointIndex != 7 && selectedPointIndex != 8) || 
                    (crowPointIndex == 3 && selectedPointIndex != 8 && selectedPointIndex != 9) || 
                    (crowPointIndex == 4 && selectedPointIndex != 5 && selectedPointIndex != 9) || 
                    (crowPointIndex == 5 && selectedPointIndex != 4 && selectedPointIndex != 6 && selectedPointIndex != 7 && selectedPointIndex != 9) || 
                    (crowPointIndex == 6 && selectedPointIndex != 0 && selectedPointIndex != 1 && selectedPointIndex != 5 && selectedPointIndex != 7) || 
                    (crowPointIndex == 7 && selectedPointIndex != 1 && selectedPointIndex != 2 && selectedPointIndex != 6 && selectedPointIndex != 8) || 
                    (crowPointIndex == 8 && selectedPointIndex != 2 && selectedPointIndex != 3 && selectedPointIndex != 7 && selectedPointIndex != 9) || 
                    (crowPointIndex == 9 && selectedPointIndex != 3 && selectedPointIndex != 4 && selectedPointIndex != 5 && selectedPointIndex != 8)) {
                    illegalMove(1);
                    return;
                }
                changeCrowPosition(selectedCrowIndex, selectedPointIndex, crowPointIndex);
                tempString = "Crow moved to normalized xPos : " + "" + xPos + " and normalized yPos : " + "" + yPos + '\n';
                console.log(tempString);
                consoleOutputString += tempString;
                crowSelected = false;
            }
        }
    }
    else { // Vulture's turn
        if (hasVultureMoved == 0) {
            changeVulturePosition(selectedPointIndex);
            tempString = "Vulture moved to normalized xPos : " + "" + xPos + " and normalized yPos : " + "" + yPos + '\n';
            console.log(tempString);
            consoleOutputString += tempString;
            hasVultureMoved = 1;
        }
        else {
            if ((currentVulturePosition == 0 && location[5] == -1 && location[6] == -1 && location[7] == -1 && location[9] == -1) || 
                (currentVulturePosition == 1 && location[5] == -1 && location[6] == -1 && location[7] == -1 && location[8] == -1) || 
                (currentVulturePosition == 2 && location[6] == -1 && location[7] == -1 && location[8] == -1 && location[9] == -1) || 
                (currentVulturePosition == 3 && location[5] == -1 && location[7] == -1 && location[8] == -1 && location[9] == -1) || 
                (currentVulturePosition == 4 && location[5] == -1 && location[6] == -1 && location[8] == -1 && location[9] == -1) || 
                (currentVulturePosition == 5 && location[0] == -1 && location[1] == -1 && location[3] == -1 && location[4] == -1 && location[6] == -1 && location[9] == -1) || 
                (currentVulturePosition == 6 && location[0] == -1 && location[1] == -1 && location[2] == -1 && location[4] == -1 && location[5] == -1 && location[7] == -1) || 
                (currentVulturePosition == 7 && location[0] == -1 && location[1] == -1 && location[2] == -1 && location[3] == -1 && location[6] == -1 && location[8] == -1) || 
                (currentVulturePosition == 8 && location[1] == -1 && location[2] == -1 && location[3] == -1 && location[4] == -1 && location[7] == -1 && location[9] == -1) || 
                (currentVulturePosition == 9 && location[0] == -1 && location[2] == -1 && location[3] == -1 && location[4] == -1 && location[5] == -1 && location[8] == -1)) {
                tempString = "The Crows have won!!\nRefresh the page to restart the game.\n";
                console.log(tempString);
                consoleOutputString += tempString;
                alert(tempString);
                restartGame = true;
                return;
            }
            else if ((currentVulturePosition == 0 && (selectedPointIndex == 5 || selectedPointIndex == 6)) || 
                     (currentVulturePosition == 1 && (selectedPointIndex == 6 || selectedPointIndex == 7)) || 
                     (currentVulturePosition == 2 && (selectedPointIndex == 7 || selectedPointIndex == 8)) || 
                     (currentVulturePosition == 3 && (selectedPointIndex == 8 || selectedPointIndex == 9)) || 
                     (currentVulturePosition == 4 && (selectedPointIndex == 5 || selectedPointIndex == 9)) || 
                     (currentVulturePosition == 5 && (selectedPointIndex == 0 || selectedPointIndex == 4 || selectedPointIndex == 6 || selectedPointIndex == 9)) || 
                     (currentVulturePosition == 6 && (selectedPointIndex == 0 || selectedPointIndex == 1 || selectedPointIndex == 5 || selectedPointIndex == 7)) || 
                     (currentVulturePosition == 7 && (selectedPointIndex == 1 || selectedPointIndex == 2 || selectedPointIndex == 6 || selectedPointIndex == 8)) || 
                     (currentVulturePosition == 8 && (selectedPointIndex == 2 || selectedPointIndex == 3 || selectedPointIndex == 7 || selectedPointIndex == 9)) || 
                     (currentVulturePosition == 9 && (selectedPointIndex == 3 || selectedPointIndex == 4 || selectedPointIndex == 5 || selectedPointIndex == 8))) {
                changeVulturePosition(selectedPointIndex);
                tempString = "Vulture moved to normalized xPos : " + "" + xPos + " and normalized yPos : " + yPos + '\n';
                console.log(tempString);
                consoleOutputString += tempString;
            }
            else if (currentVulturePosition == 0 && ((location[5] == -1 && location[9] == 0 && selectedPointIndex == 9) || (location[6] == -1 && location[7] == 0 && selectedPointIndex == 7))) {
                if (location[5] == -1 && location[9] == 0 && selectedPointIndex == 9) {
                    changeVulturePosition(9);
                    removeCrowCapturedByVulture(5);
                }
                else if (location[6] == -1 && location[7] == 0 && selectedPointIndex == 7) {
                    changeVulturePosition(7);
                    removeCrowCapturedByVulture(7);
                }
                tempString = "Vulture moved to normalized xPos : " + xPos + " and normalized yPos : " + yPos + '\n';
                console.log(tempString);
                consoleOutputString += tempString;
            }
            else if (currentVulturePosition == 1 && ((location[6] == -1 && location[5] == 0 && selectedPointIndex == 5) || (location[7] == -1 && location[8] == 0 && selectedPointIndex == 8))) {
                if (location[6] == -1 && location[5] == 0 && selectedPointIndex == 5) {
                    changeVulturePosition(5);
                    removeCrowCapturedByVulture(6);
                }
                else if (location[7] == -1 && location[8] == 0 && selectedPointIndex == 8) {
                    changeVulturePosition(8);
                    removeCrowCapturedByVulture(7);
                }
                tempString = "Vulture moved to normalized xPos : " + xPos + " and normalized yPos : " + yPos + '\n';
                console.log(tempString);
                consoleOutputString += tempString;
            }
            else if (currentVulturePosition == 2 && ((location[7] == -1 && location[6] == 0 && selectedPointIndex == 6) || (location[8] == -1 && location[9] == 0 && selectedPointIndex == 9))) {
                if (location[7] == -1 && location[6] == 0 && selectedPointIndex == 6) {
                    changeVulturePosition(6);
                    removeCrowCapturedByVulture(7);
                }
                else if (location[8] == -1 && location[9] == 0 && selectedPointIndex == 9) {
                    changeVulturePosition(9);
                    removeCrowCapturedByVulture(8);
                }
                tempString = "Vulture moved to normalized xPos : " + xPos + " and normalized yPos : " + yPos + '\n';
                console.log(tempString);
                consoleOutputString += tempString;
            }
            else if (currentVulturePosition == 3 && ((location[9] == -1 && location[5] == 0 && selectedPointIndex == 5) || (location[8] == -1 && location[7] == 0 && selectedPointIndex == 7))) {
                if (location[9] == -1 && location[5] == 0 && selectedPointIndex == 5) {
                    changeVulturePosition(5);
                    removeCrowCapturedByVulture(9);
                }
                else if (location[8] == -1 && location[7] == 0 && selectedPointIndex == 7) {
                    changeVulturePosition(7);
                    removeCrowCapturedByVulture(8);
                }
                tempString = "Vulture moved to normalized xPos : " + xPos + " and normalized yPos : " + yPos + '\n';
                console.log(tempString);
                consoleOutputString += tempString;
            }
            else if (currentVulturePosition == 4 && ((location[5] == -1 && location[6] == 0 && selectedPointIndex == 6) || (location[9] == -1 && location[8] == 0 && selectedPointIndex == 8))) {
                if (location[5] == -1 && location[6] == 0 && selectedPointIndex == 6) {
                    changeVulturePosition(6);
                    removeCrowCapturedByVulture(5);
                }
                else if (location[9] == -1 && location[8] == 0 && selectedPointIndex == 8) {
                    changeVulturePosition(8);
                    removeCrowCapturedByVulture(9);
                }
                tempString = "Vulture moved to normalized xPos : " + xPos + " and normalized yPos : " + yPos + '\n';
                console.log(tempString);
                consoleOutputString += tempString;
            }
            else if (currentVulturePosition == 5 && ((location[6] == -1 && location[1] == 0 && selectedPointIndex == 1) || (location[9] == -1 && location[3] == 0 && selectedPointIndex == 3))) {
                if (location[6] == -1 && location[1] == 0 && selectedPointIndex == 1) {
                    changeVulturePosition(1);
                    removeCrowCapturedByVulture(6);
                }
                else if (location[9] == -1 && location[3] == 0 && selectedPointIndex == 3) {
                    changeVulturePosition(3);
                    removeCrowCapturedByVulture(9);
                }
                tempString = "Vulture moved to normalized xPos : " + xPos + " and normalized yPos : " + yPos + '\n';
                console.log(tempString);
                consoleOutputString += tempString;
            }
            else if (currentVulturePosition == 6 && ((location[5] == -1 && location[4] == 0 && selectedPointIndex == 4) || (location[7] == -1 && location[2] == 0 && selectedPointIndex == 2))) {
                if (location[5] == -1 && location[4] == 0 && selectedPointIndex == 4) {
                    changeVulturePosition(4);
                    removeCrowCapturedByVulture(5);
                }
                else if (location[7] == -1 && location[2] == 0 && selectedPointIndex == 2) {
                    changeVulturePosition(2);
                    removeCrowCapturedByVulture(7);
                }
                tempString = "Vulture moved to normalized xPos : " + xPos + " and normalized yPos : " + yPos + '\n';
                console.log(tempString);
                consoleOutputString += tempString;
            }
            else if (currentVulturePosition == 7 && ((location[8] == -1 && location[3] == 0 && selectedPointIndex == 3) || (location[6] == -1 && location[0] == 0 && selectedPointIndex == 0))) {
                if (location[8] == -1 && location[3] == 0 && selectedPointIndex == 3) {
                    changeVulturePosition(3);
                    removeCrowCapturedByVulture(8);
                }
                else if (location[6] == -1 && location[0] == 0 && selectedPointIndex == 0) {
                    changeVulturePosition(0);
                    removeCrowCapturedByVulture(6);
                }
                tempString = "Vulture moved to normalized xPos : " + xPos + " and normalized yPos : " + yPos + '\n';
                console.log(tempString);
                consoleOutputString += tempString;
            }
            else if (currentVulturePosition == 8 && ((location[7] == -1 && location[1] == 0 && selectedPointIndex == 1) || (location[9] == -1 && location[4] == 0 && selectedPointIndex == 4))) {
                if (location[7] == -1 && location[1] == 0 && selectedPointIndex == 1) {
                    changeVulturePosition(1);
                    removeCrowCapturedByVulture(7);
                }
                else if (location[9] == -1 && location[4] == 0 && selectedPointIndex == 4) {
                    changeVulturePosition(4);
                    removeCrowCapturedByVulture(9);
                }
                tempString = "Vulture moved to normalized xPos : " + xPos + " and normalized yPos : " + yPos + '\n';
                console.log(tempString);
                consoleOutputString += tempString;
            }
            else if (currentVulturePosition == 9 && ((location[8] == -1 && location[2] == 0 && selectedPointIndex == 2) || (location[5] == -1 && location[0] == 0 && selectedPointIndex == 0))) {
                if (location[8] == -1 && location[2] == 0 && selectedPointIndex == 2) {
                    changeVulturePosition(2);
                    removeCrowCapturedByVulture(8);
                }
                else if (location[5] == -1 && location[0] == 0 && selectedPointIndex == 0) {
                    changeVulturePosition(0);
                    removeCrowCapturedByVulture(5);
                }
                tempString = "Vulture moved to normalized xPos : " + xPos + " and normalized yPos : " + yPos + '\n';
                console.log(tempString);
                consoleOutputString += tempString;
            }
            else if ((currentVulturePosition == 0 && selectedPointIndex != 5 && selectedPointIndex != 6) || 
                (currentVulturePosition == 1 && selectedPointIndex != 6 && selectedPointIndex != 7) || 
                (currentVulturePosition == 2 && selectedPointIndex != 7 && selectedPointIndex != 8) || 
                (currentVulturePosition == 3 && selectedPointIndex != 8 && selectedPointIndex != 9) || 
                (currentVulturePosition == 4 && selectedPointIndex != 5 && selectedPointIndex != 9) || 
                (currentVulturePosition == 5 && selectedPointIndex != 0 && selectedPointIndex != 4 && selectedPointIndex != 6 && selectedPointIndex != 9) || 
                (currentVulturePosition == 6 && selectedPointIndex != 0 && selectedPointIndex != 1 && selectedPointIndex != 5 && selectedPointIndex != 7) || 
                (currentVulturePosition == 7 && selectedPointIndex != 1 && selectedPointIndex != 2 && selectedPointIndex != 6 && selectedPointIndex != 8) || 
                (currentVulturePosition == 8 && selectedPointIndex != 2 && selectedPointIndex != 3 && selectedPointIndex != 7 && selectedPointIndex != 9) || 
                (currentVulturePosition == 9 && selectedPointIndex != 3 && selectedPointIndex != 4 && selectedPointIndex != 5 && selectedPointIndex != 8)) {
                illegalMove(0);
                return;
            }
            else {
                // Placeholder to fill extra info if any
            }
        }
        if (numCrowsCapturedByVulture == 4) {
            tempString = "The Vulture wins!!\nRefresh the page to restart the Game.\n";
            consoleOutputString += tempString;
            console.log(tempString);
            alert(tempString);
            restartGame = true;
            return;
        }
        console.log("Abhi Vulture sahab zinda hain!!");
        location[currentVulturePosition] = 0;
        currentVulturePosition = selectedPointIndex;
        location[selectedPointIndex] = 1;
    }
    turn = 1 - turn;
}

window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('click', onClick);

window.onload = function() {
	document.getElementById('link').onclick = function(code) {
        this.href = 'data:text/plain;charset=utf-11,' + encodeURIComponent(consoleOutputString);
    };
};

renderer.setAnimationLoop(animate);
