/*
 * Copyright (C) 2014 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */
/**
 * @exports GeoJSONGeometryMultiLineString
 */
define(['../../error/ArgumentError',
        './GeoJSONGeometry',
        '../../util/Logger'
    ],
    function (ArgumentError,
              GeoJSONGeometry,
              Logger) {
        "use strict";

        /**
         * Constructs a GeoJSON geometry for a MultiLineString. Applications typically do not call this constructor.
         * It is called by {@link GeoJSON} as GeoJSON geometries are read.
         * @alias GeoJSONGeometryMultiLineString
         * @constructor
         * @classdesc Contains the data associated with a GeoJSON MultiLineString geometry.
         * @augments GeoJSONGeometry
         * @param {Number[]} coordinates The array containing MultiLineString coordinates.
         * @param {String} type A string containing type of geometry.
         * @param {Object} bbox An object containing GeoJSON bbox information.
         * @throws {ArgumentError} If the specified coordinates or type are null or undefined or if the coordinates
         * parameter is not an array of LineString coordinates array.
         */
        var GeoJSONGeometryMultiLineString = function (coordinates, type, bbox) {

            if (!coordinates) {
                throw new ArgumentError(
                    Logger.logMessage(Logger.LEVEL_SEVERE, "GeoJSONGeometryMultiLineString", "constructor",
                        "missingCoordinates"));
            }

            if (coordinates[0].length < 2 || coordinates[0][0].length < 2) {
                throw new ArgumentError(
                    Logger.logMessage(Logger.LEVEL_SEVERE, "GeoJSONGeometryMultiLineString", "constructor",
                        "invalidNumberOfCoordinates"));
            }

            if (Object.prototype.toString.call(coordinates[0]) !== '[object Array]' ||
                Object.prototype.toString.call(coordinates[0][0]) !== '[object Array]' ||
                Object.prototype.toString.call(coordinates[0][0][0]) !== '[object Number]') {
                throw new ArgumentError(
                    Logger.logMessage(Logger.LEVEL_SEVERE, "GeoJSONGeometryMultiLineString", "constructor",
                        "invalidCoordinatesType"));
            }

            if (!type) {
                throw new ArgumentError(
                    Logger.logMessage(Logger.LEVEL_SEVERE, "GeoJSONGeometryLineString", "constructor",
                        "missingType"));
            }

            GeoJSONGeometry.call(this, coordinates, type, bbox);
        };

        GeoJSONGeometryMultiLineString.prototype = Object.create(GeoJSONGeometry.prototype);

        return GeoJSONGeometryMultiLineString;
    }
);
